'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, ButtonHighlight } from './button';
import { KeyBoard } from './illustrations/keyboard';

const shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export const KeyboardShortcuts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const keyboardWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRender = useRef<boolean>(true);

  // 1. Wrap highlightShortcut in useCallback to stabilize the reference
  const highlightShortcut = useCallback((index: number) => {
    if (!sliderRef.current) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const currentShortcut = sliderRef.current.querySelector<HTMLButtonElement>(
      `[data-index="${index}"]`
    );

    if (!currentShortcut) return;

    sliderRef.current.scrollTo({
      left: currentShortcut.offsetLeft - sliderRef.current.clientWidth / 2,
      behavior: 'smooth',
    });

    if (!keyboardWrapperRef.current) return;

    keyboardWrapperRef.current
      .querySelectorAll('.active')
      .forEach((elem) => elem.classList.remove('active'));

    const keys = currentShortcut.dataset.keys || '';
    const keyList = keys.split('');

    const keyElements = keyList.map((key) =>
      keyboardWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );
    keyElements.forEach((elem) => elem?.classList.add('active'));

    setActiveIndex(index);
  }, []);

  // 2. Wrap scheduleTimeout in useCallback
  const scheduleTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      highlightShortcut((activeIndex + 1) % shortcuts.length);
    }, 2500);
  }, [activeIndex, highlightShortcut]);

  // 3. Updated useEffect with all necessary dependencies
  useEffect(() => {
    if (firstRender.current) {
      highlightShortcut(0);
      firstRender.current = false;
      scheduleTimeout();
      return;
    }

    scheduleTimeout();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, highlightShortcut, scheduleTimeout]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const index = Number(e.currentTarget.dataset.index);
    highlightShortcut(index);
  };

  return (
    <div className='-mt-16 w-full px-4 md:px-0'>
      <div
        ref={keyboardWrapperRef}
        className='keybord-mask pointer-events-none w-[200%] select-none md:w-full'
      >
        <KeyBoard />
      </div>
      <div className='my-8 h-auto w-full overflow-hidden md:h-[4rem]'>
        <div
          ref={sliderRef}
          className='shortcut-keys-mask hidden min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-9 md:flex'
        >
          {shortcuts.map((shortcut, idx) => (
            <Button
              className='shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]'
              key={idx}
              data-index={idx}
              data-keys={shortcut.keys}
              onClick={onClick}
              variant='secondary'
              size='small'
            >
              <ButtonHighlight className='-ml-2 mr-2 uppercase'>
                {shortcut.keys}
              </ButtonHighlight>
              {shortcut.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};