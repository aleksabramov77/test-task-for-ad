import React from 'react'

const Preview = ({ personData }) => {
    return (
        <div className='main__preview'>

            {/* Person data display block */}
            <div className='info-block'>
                <div className='info-block__title'>Персональные данные</div>
                {personData.name && <div
                    className='info-block__data info-block__data_person'>{personData.name + ', ' + personData.age + ' лет'}</div>}
            </div>

            {/* Children data display block */}
            <div className='info-block'>
                {personData.children.length !== 0 && <div className='info-block__title '>Дети</div>}
                <div className='info-block__data'>
                    {personData.children.map(child => <div className='info-block__data_child' key={child.id}>
                        {child.name + ', ' + child.age + ' лет'}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Preview