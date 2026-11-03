'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VisitorMapProps {
    script: string;
}

// MapMyVisitors widgets locate their own <script> tag by id and render right after it,
// so the tag has to be created at runtime inside the container (React won't run inline scripts).
export default function VisitorMap({ script }: VisitorMapProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLocal, setIsLocal] = useState(false);

    useEffect(() => {
        // Skip local previews so they don't count as visits.
        const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
        setIsLocal(local);

        const container = containerRef.current;
        if (!container || !script || local) return;

        const el = document.createElement('script');
        el.type = 'text/javascript';
        el.id = script.includes('globe.js') ? 'mmvst_globe' : 'mapmyvisitors';
        el.src = script;
        el.async = true;
        container.appendChild(el);

        return () => {
            container.innerHTML = '';
        };
    }, [script]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            {isLocal && (
                <p className="text-xs text-neutral-500">Visitor map loads on the live site.</p>
            )}
            {/* The widget sizes itself to this container's width (w=a) */}
            <div ref={containerRef} className="w-full max-w-xs overflow-hidden rounded-lg" />
        </motion.div>
    );
}
