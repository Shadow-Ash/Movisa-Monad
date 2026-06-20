'use client';

import type { CSSProperties, MouseEvent } from 'react';

import styles from './hero-card.module.css';

type CardStyle = CSSProperties & {
    '--rotate-x': string;
    '--rotate-y': string;
    '--glare-x': string;
    '--glare-y': string;
    '--glare-opacity': number;
};

const restingStyle: CardStyle = {
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
    '--glare-x': '50%',
    '--glare-y': '50%',
    '--glare-opacity': 0,
};

export function HeroCard() {
    function handlePointerMove(
        event: MouseEvent<HTMLDivElement>,
    ) {
        const card = event.currentTarget;
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;

        card.style.setProperty(
            '--rotate-x',
            `${(0.5 - y) * 18}deg`,
        );
        card.style.setProperty(
            '--rotate-y',
            `${(x - 0.5) * 22}deg`,
        );
        card.style.setProperty('--glare-x', `${x * 100}%`);
        card.style.setProperty('--glare-y', `${y * 100}%`);
        card.style.setProperty('--glare-opacity', '1');
    }

    function handlePointerLeave(
        event: MouseEvent<HTMLDivElement>,
    ) {
        const card = event.currentTarget;

        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
        card.style.setProperty('--glare-x', '50%');
        card.style.setProperty('--glare-y', '50%');
        card.style.setProperty('--glare-opacity', '0');
    }

    return (
        <div className={styles.scene}>
            <div className={styles.floatLayer}>
                <div
                    className={styles.card}
                    style={restingStyle}
                    onMouseMove={handlePointerMove}
                    onMouseLeave={handlePointerLeave}
                >
                    <div className={styles.ambientGlow} />
                    <div className={styles.glare} />

                    <div className={styles.topRow}>
                        <span className={styles.brand}>MOVISA</span>
                        <ContactlessIcon />
                    </div>

                    <EmvChip />

                    <div className={styles.details}>
                        <p className={styles.number}>
                            4242&nbsp; 8601&nbsp; 9137&nbsp; 2048
                        </p>

                        <div className={styles.bottomRow}>
                            <div>
                                <span className={styles.label}>Card holder</span>
                                <p className={styles.value}>MOVISA AGENT</p>
                            </div>

                            <div>
                                <span className={styles.label}>Valid thru</span>
                                <p className={styles.value}>09/29</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EmvChip() {
    return (
        <svg
            className={styles.chip}
            viewBox="0 0 64 48"
            role="img"
            aria-label="EMV chip"
        >
            <defs>
                <linearGradient id="chip-metal" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fff1b8" />
                    <stop offset="0.45" stopColor="#c9a75e" />
                    <stop offset="0.7" stopColor="#f4dc94" />
                    <stop offset="1" stopColor="#987431" />
                </linearGradient>
            </defs>
            <rect width="64" height="48" rx="8" fill="url(#chip-metal)" />
            <g fill="none" stroke="#6f5427" strokeWidth="1.5" opacity="0.75">
                <path d="M24 1v46M40 1v46M1 16h22l9 8-9 8H1M63 16H41l-9 8 9 8h22" />
            </g>
        </svg>
    );
}

function ContactlessIcon() {
    return (
        <svg
            className={styles.contactless}
            viewBox="0 0 32 32"
            aria-hidden="true"
        >
            <path d="M10 10a8.5 8.5 0 0 1 0 12M15 6a14 14 0 0 1 0 20M20 2a19.5 19.5 0 0 1 0 28" />
        </svg>
    );
}
