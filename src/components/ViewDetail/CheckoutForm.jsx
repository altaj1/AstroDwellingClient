/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { ImSpinner9 } from "react-icons/im";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
const CheckoutForm = ({ closeModal, bookingInfo }) => {
    const stripe = useStripe();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState();
    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState('');
    const elements = useElements();
    const user = useAuth();
    useEffect( ()=>{
        getClientSecret({price: bookingInfo.price})
    },[])
    const getClientSecret = async price =>{
        const {data} = await axiosSecure.post(`/create-payment-intent`, price);
        console.log("client secret for verver -------->", data)
        setClientSecret(data.clientSecret)
    }
    // console.log(clientSecret)
     const handelSubmit = async event =>{
        event.preventDefault();
        setProcessing (true);
        console.log("this is payment method")
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
          }

          // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement)

    if (card == null) {
      return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
        setProcessing(false)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setCardError('')
      }

      const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    //   console.log(confirmError, 'thsi is confirm error')
      if (confirmError) {
        console.log(confirmError)
        setCardError(confirmError.message)
        setProcessing(false)
        return
      }

      if (paymentIntent.status === 'succeeded'){
        console.log(paymentIntent, 'this is my payment')
        const paymentInfo = {
            ...bookingInfo,
            transactionId: paymentIntent.id,
            date: new Date(),
            status: "pending",
          }

          try{
            const { data } = await axiosSecure.put(
                      `${import.meta.env.VITE_API_URL}/booking/${bookingInfo._id}`,
                      paymentInfo
                    );
                    console.log(data)
                    if(data.modifiedCount>0){
                         toast("Congratulations Booking Successfully!!");
                    }
          }catch(err){
    console.log(err)
          }
      }
     

    };
     
  return (
    <>
      <form onClick={handelSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            // disabled={!stripe || !clientSecret || processing}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {/* {processing ? (
              <ImSpinner9 className='animate-spin m-auto' size={24} />
            ) : (
              `Pay ${bookingInfo?.price}`
            )} */}
            pay
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
