import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";



function Profile() {


  
  return (
    <div>
      <form>
        <div class="row mb-2">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control shadow-sm border-0"
                placeholder="First Name"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example2"
                class="form-control shadow-sm border-0"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div class="form-outline mb-2">
          <input
            type="text"
            id="form6Example3"
            class="form-control shadow-sm border-0"
            placeholder="Service Name"
          />
        </div>

        <div class="form-outline mb-2">
          <input
            type="text"
            id="form6Example4"
            class="form-control shadow-sm border-0"
            placeholder="Address"
          />
        </div>

        <div className="row">
          <div className="col">
            <div class="form-outline mb-2">
              <input
                type="email"
                id="form6Example5"
                class="form-control shadow-sm border-0"
              />
              <label class="form-label border-0" for="form6Example5">
                Email
              </label>
            </div>
          </div>
          <div className="col">
            <div class="form-outline mb-2 border-0">
              <input
                type="number"
                id="form6Example6"
                class="form-control shadow-sm border-0"
              />
              <label class="form-label border-0" for="form6Example6">
                Phone
              </label>
            </div>
          </div>
        </div>

        <div class="form-outline mb-2 border-0">
          <textarea
            class="form-control "
            id="form6Example7"
            rows="4"
          ></textarea>
          <label class="form-label shadow-sm border-0" for="form6Example7">
            Additional information
          </label>
        </div>

        <div class="form-check d-flex justify-content-center mb-4 shadow-sm border-0">
          <input
            class="form-check-input me-2 shadow-sm border-0"
            type="checkbox"
            value=""
            id="form6Example8"
            checked
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary btn-block mb-4 shadow-sm border-0"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
