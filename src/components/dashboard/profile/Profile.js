import React, { useState } from "react";
import DashLayout from "../../../utils/dash_layout";
import { useForm } from "react-hook-form"

import { useSelector, useDispatch } from "react-redux";

const Profile = (props) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const {register, handleSubmit, errors } = useForm();
    const [ disable, setDisabled ] = useState();

    const submitForm = (data) => {
        console.log(data)
    }

return (
    <DashLayout auth={auth} title="Profile">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name">First name</label>
            <input type="text" className="form-control" name="name" defaultValue={auth.user.name} ref={register({required: true})} />
            { errors.name && <span className="error">This field is required</span> }
            <span className="error">This field is required</span>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="lastname">Last name</label>
            <input type="text" className="form-control" name="lastname" defaultValue={auth.user.lastname} ref={register({required: true})} />
            { errors.lastname && <span className="error">This field is required</span> }
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" defaultValue={auth.user.email} ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })}/>
          { errors.email && <span className="error">Please check your email</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address" defaultValue={auth.user.address} ref={register}/>
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="gen">What are you ?</label>
            <select className="custom-select d-block w-100" name="gen" defaultValue={auth.user.gen} ref={register}>
              <option value="" defaultValue>
                Choose...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="musician">Musician</option>
              <option value="robot">Robot</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control" name="age" defaultValue={auth.user.age} ref={register} />
          </div>
        </div>

        <hr className="mb-4" />

        <button
          className="btn btn-outline-primary btn-lg btn-block"
          type="submit"
        >
          Update profile
        </button>
      </form>
    </DashLayout>
  );
};

export default Profile;
