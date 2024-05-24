import './dialog.css';
import { useContext } from 'react';
import DialogContext from '../../DialogContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

function Dialog() {
  const { isDialogShown, setIsDialogShown } = useContext(DialogContext);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => { reset(); setIsDialogShown(false); }

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  return (
    <AnimatePresence>
      {isDialogShown && (
        <motion.div 
          className="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className='dark-background' 
            onClick={() => {setIsDialogShown(false); reset();}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className='form-box' onClick={(event) => (event.stopPropagation())}>
              <h2>Create Account</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='create-account-form'>
              <input 
                type='text'
                placeholder='Username'
                autoComplete='off'
                className={errors.Username ? 'error' : ''}
                {...register("Username", {required: true, maxLength: 20})}
              />
              <input 
                type='text'
                placeholder='Email'
                autoComplete='off'
                className={errors.Email ? 'error' : ''}
                {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
              />
              <input 
                type='text'
                placeholder='Password (8 characters min)'
                autoComplete='off'
                className={errors.year ? 'error' : ''}
                {...register("year", {
                  required: "Year is required",
                  validate: validatePassword
                })}
              />
              <input
                type='submit'
                value='Sign Up'
              />
              </form>
              <p>ALL FIELDS REQUIRED</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dialog;
