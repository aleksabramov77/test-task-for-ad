import { Field, Form } from 'react-final-form'
import { setPersonData } from '../store/mainReducer'
import React from 'react'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import plus_icon from '../img/svg/plus.svg'
import { useDispatch } from 'react-redux'

const FormPage = ({ personData }) => {
    const dispatch = useDispatch()

    /* Validators */
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)
    const required = value =>
        value
            ? undefined
            : 'Поле обязательно'
    const isName = value =>
        value && !/^[a-яА-Яa-zA-Z ]+$/.test(value)
            ? `Не корректное имя`
            : undefined
    const isAge = value =>
        value && (!/^[0-9]+$/.test(value) || +value < 0 || +value > 150)
            ? `Не корректный возраст`
            : undefined

    /* Custom input */
    const Input = ({ input, meta, fieldLabel = '' }) => {
        const hasError = meta.touched && meta.error
        return (
            <div className={'input ' + (hasError ? ' input_error' : '')}>
                <div className={'input__head'}>
                    <div className='input__title'>{fieldLabel}</div>
                    <div className='input__error'>{hasError && <span> {meta.error} </span>}</div>
                </div>
                <input className='input__field' {...input}  />
            </div>
        )
    }

    return (
        <>
            <Form
                onSubmit={formData => dispatch(setPersonData(formData))}
                mutators={{ ...arrayMutators }}
                initialValues={personData}
                render={({
                    handleSubmit, values, hasValidationErrors, pristine,
                    form: { mutators: { push } }
                }) => {
                    return (
                        <form onSubmit={handleSubmit} className='main__form-page'>

                            {/* Person data input block */}
                            <div className='form-block'>
                                <div className='form-block__title'>Персональные данные</div>
                                <div className='form-block__inputs form-block__inputs_person'>
                                    <Field
                                        name='name'
                                        fieldLabel='Имя'
                                        component={Input}
                                        type='text'
                                        validate={composeValidators(required, isName)}
                                    />
                                    <Field
                                        name='age'
                                        fieldLabel='Возраст'
                                        component={Input}
                                        type='number'
                                        validate={composeValidators(required, isAge)}
                                    />
                                </div>

                            </div>

                            {/* Add child button */}
                            <button
                                type="button"
                                className={'button button__add-child button__add-child_' +
                                (!values.children.length
                                    ? 'first'
                                    : (values.children.length < 5
                                        ? 'more'
                                        : 'disabled'))}
                                onClick={() => push('children', undefined)}
                                disabled={values.children && values.children.length >= 5}
                            >
                                <div className='button__container'>
                                    <img className='color-blue' src={plus_icon} alt='plus'/>
                                    {values.children.length > 0 &&
                                    <div className='button__text'>Добавить ребенка</div>}
                                </div>
                            </button>

                            {/* Children data input block */}
                            <div className='form-block'>
                                {values.children.length > 0 && <div className='form-block__title'>Дети (макс.5)</div>}
                                <div className='form-block__inputs'>
                                    {/* Array of child data inputs */}
                                    <FieldArray name="children">
                                        {({ fields }) =>
                                            fields.map((name, index) => (

                                                /* Child input block */
                                                <div className='form-block__inputs_child' key={name}>
                                                    <Field
                                                        name={`${name}.id`}
                                                        component="input"
                                                        hidden={true}
                                                        initialValue={index + 1}/>
                                                    <Field
                                                        name={`${name}.name`}
                                                        fieldLabel='Имя'
                                                        component={Input}
                                                        placeholder="name"
                                                        validate={composeValidators(required, isName)}
                                                    />
                                                    <Field
                                                        name={`${name}.age`}
                                                        fieldLabel='Возраст'
                                                        component={Input}
                                                        placeholder="age"
                                                        validate={composeValidators(required, isAge)}
                                                    />
                                                    <div className='form-block__button-delete'
                                                         onClick={() => fields.remove(index)}
                                                         style={{ cursor: 'pointer' }}
                                                    >
                                                        Удалить
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </FieldArray>
                                </div>

                                {/* Submit button */}
                                <button
                                    className={'button button__submit  button__submit_' + (!values.children.length
                                        ? 'zero-child'
                                        : 'one-child') + (hasValidationErrors ? ' button__submit_error' : '')}
                                    type="submit"
                                    disabled={pristine || hasValidationErrors}
                                >
                                    <div className='button__container'>
                                        <div className='button__text'>
                                            Сохранить
                                        </div>

                                    </div>
                                </button>
                            </div>
                        </form>
                    )
                }
                }
            />
        </>
    )
}

export default FormPage
