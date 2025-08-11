"use client";
import { useEffect, useRef , useState } from 'react';
import styles from './styles.module.css';

const ScratchableModal = ({ show, onClose, children, actionButton }) => {
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);
    const isHintVisible = useRef(true);
    const [isRevealed, setIsRevealed] = useState(false);
    useEffect(() => {
        if (show) {
            setIsRevealed(false);
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            const noisePattern = "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 250 250\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"4\" numOctaves=\"8\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')";
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#2a265f');
            gradient.addColorStop(1, '#1a163a');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.5;
            const noiseImg = new Image();
            noiseImg.onload = () => {
                ctx.drawImage(noiseImg, 0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = 1.0;
            };
            noiseImg.src = "data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

            ctx.globalCompositeOperation = 'destination-out';
        }
    }, [show]);

    const getEventPosition = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches ? e.touches[0] : null;
        return {
            x: (touch || e).clientX - rect.left,
            y: (touch || e).clientY - rect.top,
        };
    };

    const checkScratchProgress = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let transparentPixelCount = 0;

    
        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) {
                transparentPixelCount++;
            }
        }

        const totalPixels = pixels.length / 4;
        const scratchPercent = (transparentPixelCount / totalPixels) * 100;

    
        if (scratchPercent > 50) {
            setIsRevealed(true);
        }
    };


    const startDrawing = (e) => {
        isDrawing.current = true;
        if (isHintVisible.current) {
            const hint = e.target.parentElement.querySelector(`.${styles.scratchHint}`);
            if (hint) hint.style.opacity = '0';
            isHintVisible.current = false;
        }
        scratch(e);
    };


    const stopDrawing = () => {
        isDrawing.current = false;
        checkScratchProgress();
    };
    const scratch = (e) => {
        if (!isDrawing.current) return;
        const pos = getEventPosition(e);
        const ctx = canvasRef.current.getContext('2d');

    
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 30, 0, Math.PI * 2);
        ctx.fill();
    };

    if (!show) {
        return null;
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className='text-white'>Call Us Now</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                <div className={styles.body}>
                    <div className={styles.scratchContainer}>
                        <div className={styles.revealedContent}>
                            {children}
                        </div>
                        <canvas
                            ref={canvasRef}
                            className={`${styles.scratchCanvas} ${isRevealed ? styles.revealed : ''}`}
                            onMouseDown={startDrawing}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            onMouseMove={scratch}
                            onTouchStart={startDrawing}
                            onTouchEnd={stopDrawing}
                            onTouchMove={scratch}
                        />
                        <div className={`${styles.scratchHint} ${isRevealed ? styles.revealed : ''}`}>
                            Scratch to Reveal
                        </div>
                        <div className={styles.actionButtonContainer}>
                            {actionButton}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScratchableModal;