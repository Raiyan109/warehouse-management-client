// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import Loading from '../Loading/Loading';




const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth, getAuth());

    // const provider = new GoogleAuthProvider()
    const navigate = useNavigate()

    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, provider)
    //         .then(result => {
    //             const user = result.user
    //             console.log(user)
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         })
    // }

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p >Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            {/* <a
                class="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#0077b5] border-2 border-[#0077b5] rounded hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
                href="/linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
                <svg
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    />
                </svg>
            </a> */}

            {errorElement}
            <button
                onClick={() => signInWithGoogle()}
                type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;