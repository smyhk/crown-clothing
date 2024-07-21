import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
