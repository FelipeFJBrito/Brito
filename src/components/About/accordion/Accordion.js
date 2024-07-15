import React, { useEffect, useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
    const [accordionItems, setAccordionItems] = useState([]);

    useEffect(() => {
        if (items) {
            setAccordionItems(
                items.map(item => ({
                    ...item,
                    toggled: false,
                }))
            );
        }
    }, [items]);

    const handleAccordionToggle = (clickedItem) => {
        setAccordionItems(
            accordionItems.map(item => {
                let toggled = item.id === clickedItem.id ? !item.toggled : false;
                return {
                    ...item,
                    toggled,
                };
            })
        );
    };

    return (
        <div className='accordion-wrapper'>
            {accordionItems.map((listItem, key) => (
                <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`} key={key}>
                    <button className='toggle' onClick={() => handleAccordionToggle(listItem)}>
                        <p>{listItem.label}</p>
                        <div className='direction-indicator'>{listItem.toggled ? '-' : '+'}</div>
                    </button>
                    <div className='content-parent' style={{ maxHeight: listItem.toggled ? '1000px' : '0' }}>
                        <div className='content'>{listItem.renderContent()}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
