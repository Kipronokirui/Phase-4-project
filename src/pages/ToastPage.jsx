import React from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastPage() {
    const notify = () => toast.success("Wow so easy!");
  return (
    <div>
        <button onClick={notify}>Notify!</button>
    </div>
  )
}
