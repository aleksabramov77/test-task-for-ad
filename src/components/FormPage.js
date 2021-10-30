import { Field, Form } from 'react-final-form'
import { setPersonData } from '../store/mainReducer'
import React, { useState } from 'react'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const FormPage = ({ personData, setPersonData }) => {

    /* Validators */
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    const required = value =>
        value
            ? undefined
            : 'Field is required'
    const maxLength = max => value =>
        value && value.length > max
            ? `Must be ${max} characters or less`
            : undefined
    const minLength = min => value =>
        value && (value.length < min)
            ? `Must be ${min} characters or more`
            : undefined
    const isName = value =>
        value && !/^[a-яА-Яa-zA-Z ]+$/.test(value)
            ? `Not valid name`
            : undefined
    const isAge = value =>
        value && (+value < 0 || +value > 150)
            ? `Not valid age`
            : undefined

    /* Custom input */
    const Input = ({ input, meta, fieldLabel = '' }) => {
        const hasError = meta.touched && meta.error
        return (
            <div className={'input ' + (hasError ? 'error' : '')}>
                <div className='input__title'>{fieldLabel}</div>
                <input className='input__field' {...input}  />
                {hasError && <span> {meta.error} </span>}
            </div>
        )
    }

    return (
        <>
            <Form
                onSubmit={setPersonData}
                mutators={{
                    ...arrayMutators
                }}
                initialValues={personData}
                render={({
                    handleSubmit,
                    values,
                    form: {
                        mutators: { push }
                    },
                    hasValidationErrors,
                    pristine,
                    errors,
                }) => {
                    console.log(errors)
                    return (
                        <form onSubmit={handleSubmit} className='main__form-page'>
                            <div className='form-block'>
                                <div className='form-block__title'>Персональные данные</div>
                                <div className='form-block__inputs form-block__inputs_person'>
                                    <Field
                                        name='name'
                                        fieldLabel='Имя'
                                        component={Input}
                                        type='text'
                                        // placeholder={dataType}
                                        validate={composeValidators(required, isName)}
                                    />
                                    <Field
                                        name='age'
                                        fieldLabel='Возраст'
                                        component={Input}
                                        type='text'
                                        // placeholder={dataType}
                                        validate={composeValidators(required, isAge)}
                                    />
                                </div>

                            </div>

                            <button
                                type="button"
                                onClick={() => push('children', undefined)}
                                // onClick={onAddChildButton}
                                disabled={values.children && values.children.length >= 5}
                            >
                                + Добавить ребенка
                            </button>
                            <div className='form-block'>

                                {<div className='form-block__title'>Дети (макс.5)</div>}

                                <div className='form-block__inputs'>



                                <FieldArray name="children">
                                    {({ fields }) =>
                                        fields.map((name, index) => (
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
                                                <div       className='form-block__button-delete'
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

                            </div>
                            <button
                                type="submit"
                                disabled={pristine || hasValidationErrors}
                            >
                                Submit
                            </button>
                        </form>
                    )
                }
                }
            />
        </>
    )
}

export default FormPage
