'use client';
import { useTranslations } from 'next-intl';
import styles from './style.module.scss';
import { useState } from 'react';
import { Container } from '../container';
import Link from 'next/dist/client/link';
import { cn } from '@/utils';
import Code from '../svg/codesvg/code';

export default function NavBar() {
    const t = useTranslations("header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Link href="#home" className={styles.logo} onClick={closeMenu}>
                        <h1>RAMON
                            <Code />
                        </h1>
                    </Link>
                    <nav className={cn(styles.navBar, isMenuOpen && styles.active)}>

                    </nav>
                </div>
            </Container>
        </header>
    );
}