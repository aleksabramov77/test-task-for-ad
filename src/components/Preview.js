import React from 'react'

const Preview = ({ personData }) => {
    /* Correct end of age (год года лет) */
    const ageToText = age => (age + ' ' + ['год', 'года', 'лет']
        [(age % 100 > 4 && age % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(age % 10 < 5) ? age % 10 : 5]])

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