import React from 'react';

const Accordian = ({q, a}) => {
    return (
        <div className="collapse my-5 collapse-plus bg-base-200 text-green-600">
            <input type="radio" name="my-accordion-3"/>
            <div className="collapse-title text-xl font-medium">
              {q}
            </div>
            <div className="collapse-content text-justify">
                <p>{a}</p>
            </div>
        </div>
    );
};

export default Accordian;