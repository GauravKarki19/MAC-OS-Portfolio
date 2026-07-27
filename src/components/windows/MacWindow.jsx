import React, { useEffect, useRef, useState } from 'react';
import './Window.scss';

const MacWindow = ({ children, windowName, setWindowState }) => {
    const [position, setPosition] = useState({ x: 80, y: 80 });
    const [size, setSize] = useState({ width: 1000, height: 500 });
    const dragState = useRef({ active: false, offsetX: 0, offsetY: 0 });
    const resizeState = useRef({
        active: false,
        direction: '',
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0,
        startPosX: 0,
        startPosY: 0,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (dragState.current.active) {
                setPosition({
                    x: event.clientX - dragState.current.offsetX,
                    y: event.clientY - dragState.current.offsetY,
                });
                return;
            }

            if (!resizeState.current.active) return;

            const { direction, startX, startY, startWidth, startHeight, startPosX, startPosY } = resizeState.current;
            const deltaX = event.clientX - startX;
            const deltaY = event.clientY - startY;

            let nextWidth = startWidth;
            let nextHeight = startHeight;
            let nextX = startPosX;
            let nextY = startPosY;

            if (direction.includes('e')) {
                nextWidth = Math.max(300, startWidth + deltaX);
            }

            if (direction.includes('s')) {
                nextHeight = Math.max(220, startHeight + deltaY);
            }

            if (direction.includes('w')) {
                nextWidth = Math.max(300, startWidth - deltaX);
                nextX = startPosX + (startWidth - nextWidth);
            }

            if (direction.includes('n')) {
                nextHeight = Math.max(220, startHeight - deltaY);
                nextY = startPosY + (startHeight - nextHeight);
            }

            setSize({ width: nextWidth, height: nextHeight });
            setPosition({ x: nextX, y: nextY });
        };

        const handleMouseUp = () => {
            dragState.current.active = false;
            resizeState.current.active = false;
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };
    }, []);

    const handleMouseDown = (event) => {
        if (event.button !== 0) return;

        dragState.current.active = true;
        dragState.current.offsetX = event.clientX - position.x;
        dragState.current.offsetY = event.clientY - position.y;
        document.body.style.userSelect = 'none';
    };

    const startResize = (direction, event) => {
        if (event.button !== 0) return;

        event.preventDefault();
        event.stopPropagation();

        resizeState.current = {
            active: true,
            direction,
            startX: event.clientX,
            startY: event.clientY,
            startWidth: size.width,
            startHeight: size.height,
            startPosX: position.x,
            startPosY: position.y,
        };

        document.body.style.userSelect = 'none';
        document.body.style.cursor = direction === 'e' || direction === 'w'
            ? 'ew-resize'
            : direction === 'n' || direction === 's'
                ? 'ns-resize'
                : 'nwse-resize';
    };

    return (
        <div
            className="window"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                width: `${size.width}px`,
                height: `${size.height}px`,
            }}
        >
            <div className="resize-handle top" onMouseDown={(event) => startResize('n', event)} />
            <div className="resize-handle bottom" onMouseDown={(event) => startResize('s', event)} />
            <div className="resize-handle left" onMouseDown={(event) => startResize('w', event)} />
            <div className="resize-handle right" onMouseDown={(event) => startResize('e', event)} />
            <div className="resize-handle top-left" onMouseDown={(event) => startResize('nw', event)} />
            <div className="resize-handle top-right" onMouseDown={(event) => startResize('ne', event)} />
            <div className="resize-handle bottom-left" onMouseDown={(event) => startResize('sw', event)} />
            <div className="resize-handle bottom-right" onMouseDown={(event) => startResize('se', event)} />

            <div className="nav" onMouseDown={handleMouseDown}>
                <div className="dots">
                    <div onClick={() => setWindowState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title">
                    <p>gauravkarki - zsh</p>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};

export default MacWindow;
