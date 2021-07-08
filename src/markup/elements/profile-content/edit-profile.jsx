import React, { useState } from "react";

const EditProfile = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  //   const [firstName, setFirstName] = useState();
  //   const [firstName, setFirstName] = useState();
  //   const [firstName, setFirstName] = useState();
  //   const [firstName, setFirstName] = useState();
  return (
    <>
      <div className="profile-head">
        <h5>Edit Profile</h5>
      </div>
      <form className="edit-profile">
        <div className="">
          <div className="form-group row">
            <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
              <h3>1. Personal Details</h3>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              First Name
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input
                className="form-control"
                value={firstName}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Last Name
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Occupation
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Company Name
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
              <span className="help">
                If you want your invoices addressed to a company. Leave blank to
                use your full name.
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Phone No.
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="seperator"></div>

          <div className="form-group row">
            <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
              <h3>2. Address</h3>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Address
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              City
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              State
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Postcode
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>

          <div className="form-group row">
            <div className="col-12 col-sm-9 col-md-9 col-lg-10 ml-auto">
              <h3 className="m-form__section">3. Social Links</h3>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Linkedin
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Facebook
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Twitter
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
              Instagram
            </label>
            <div className="col-12 col-sm-9 col-md-9 col-lg-7">
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                <button type="reset" className="btn m-r10">
                  Save changes
                </button>
                <button type="reset" className="btn-secondry">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
