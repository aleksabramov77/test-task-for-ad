import React from 'react'

const Preview = ({ personData }) => {
    const ageToText = (age) => {
        let txt, count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = 'лет';
        } else {
            count = count % 10;
            if (count === 1) {
                txt = 'год';
            } else if (count >= 2 && count <= 4) {
                txt = 'года';
            } else {
                txt = 'лет';
            }
        }
        return `${age} ${txt}`;
    }

    return (
        <div className='main__preview'>

            {/* Person data display block */}
            <div className='info-block'>
                <div className='info-block__title'>Персональные данные</div>
                {personData.name && <div
                    className='info-block__data info-block__data_person'>{personData.name + ', ' + ageToText(personData.age)}</div>}
            </div>

            {/* Children data display block */}
            <div className='info-block'>
                {personData.children.length !== 0 && <div className='info-block__title '>Дети</div>}
                <div className='info-block__data'>
                    {personData.children.map(child => <div className='info-block__data_child' key={child.id}>
                        {child.name + ', ' + ageToText(child.age)}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Preview