import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Build the Button component with the specified props
const Button = ({ 
    size = null, // The size of the button (e.g., 'sm', 'lg', or null)
    outline = false, // Whether the button should be an outline button
    variant = 'info', // The color variant of the button
    block = false, // Whether the button should be a block-level button
    disabled = false, // Whether the button should be disabled
    className, // Custom classes for the button
    style, // Custom styles for the button
    link, // The URL the button should link to
    label // The text of the button
}) => {
    const sizeMap = {
        sm: 'sm',
        small: 'sm',
        lg: 'lg',
        large: 'lg',
        medium: null,
    };
    const buttonSize = size ? sizeMap[large] : '';
    const sizeClass = buttonSize ? `button--${buttonSize}` : '';
    const outlineClass = outline ? 'button--outline' : '';
    const variantClass = variant ? `button--${variant}` : '';
    const blockClass = block ? 'button--block' : '';
    const disabledClass = disabled ? 'disabled' : '';
    // If the button is disabled, set the destination to null.
    const destination = disabled ? null : link;
    return (
        <Link to={destination}>
            <button
                className={clsx('button', sizeClass, outlineClass, variantClass, blockClass, disabledClass, className)}
                style={{paddingTop: '10px', paddingBottom: '10px', paddingLeft: '15px', paddingRight: '15px'}}
                role="button"
                aria-disabled={disabled}
            >
                {label}
            </button>
        </Link>
    );
};

export default Button;