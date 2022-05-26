import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utilities/firebase/Firebase';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

function MyAccountTab() {

    const currentUser = useSelector(selectCurrentUser);


    return (
        <div className="my-account-wrapper pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* My Account Page Start */}
                        <div className="myaccount-page-wrapper">
                            {/* My Account Tab Menu Start */}
                            <div className="row">
                                <Tabs className="d-flex">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="myaccount-tab-menu nav">
                                            <TabList>
                                                <Tab>
                                                    <a href="#dashboad" className="active" >
                                                        Dashboard
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a href="#orders">
                                                        Orders
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a href="#payment-method" >
                                                        Payment Method
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a href="#address-edit" >
                                                        Address
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a href="#account-info" >
                                                        Account Details
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a href="login-register.html">Logout</a>
                                                </Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                    {/* My Account Tab Menu End */}
                                    {/* My Account Tab Content Start */}
                                    <div className="col-lg-9 col-md-8">
                                        <div className="tab-content" id="myaccountContent">
                                            <TabPanel>
                                            {/* Single Tab Content Start */}
                                            <div
                                                className="tab-pane fade show active"
                                                id="dashboad"
                                                role="tabpanel"
                                            >
                                                <div className="myaccount-content">
                                                    <h3>Dashboard</h3>
                                                    <div className="welcome">
                                                        <p>
                                                            Hello, <strong>{currentUser.displayName}</strong>
                                                            <Link to="/auth" onClick={signOutUser} className="logout">
                                                                {" "}
                                                                Logout
                                                            </Link>

                                                        </p>
                                                    </div>
                                                    <p className="mb-0">
                                                        From your account dashboard. you can easily check &amp;
                                                        view your recent orders, manage your shipping and billing
                                                        addresses and edit your password and account details.
                                                    </p>
                                                </div>
                                            </div>
                                            </TabPanel>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <TabPanel>
                                            <div className="tab-pane fade show active" id="orders" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Orders</h3>
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Aug 22, 2018</td>
                                                                    <td>Pending</td>
                                                                    <td>$3000</td>
                                                                    <td>
                                                                        <a
                                                                            href="cart.html"
                                                                            className="check-btn sqr-btn "
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>July 22, 2018</td>
                                                                    <td>Approved</td>
                                                                    <td>$200</td>
                                                                    <td>
                                                                        <a
                                                                            href="cart.html"
                                                                            className="check-btn sqr-btn "
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>June 12, 2017</td>
                                                                    <td>On Hold</td>
                                                                    <td>$990</td>
                                                                    <td>
                                                                        <a
                                                                            href="cart.html"
                                                                            className="check-btn sqr-btn "
                                                                        >
                                                                            View
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            </TabPanel>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <TabPanel>
                                            <div className="tab-pane fade show active" id="payment-method">
                                                <div className="myaccount-content">
                                                    <h3>Payment Method</h3>
                                                    <p className="saved-message">
                                                        You Can't Saved Your Payment Method yet.
                                                    </p>
                                                </div>
                                            </div>
                                            </TabPanel>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <TabPanel>
                                            <div className="tab-pane fade show active" id="address-edit">
                                                <div className="myaccount-content">
                                                    <h3>Billing Address</h3>
                                                    <address>
                                                        <p>
                                                            <strong>Alex Tuntuni</strong>
                                                        </p>
                                                        <p>
                                                            1355 Market St, Suite 900 <br />
                                                            San Francisco, CA 94103
                                                        </p>
                                                        <p>Mobile: (123) 456-7890</p>
                                                    </address>
                                                    <a href="#" className="check-btn sqr-btn ">
                                                        <i className="fa fa-edit" /> Edit Address
                                                    </a>
                                                </div>
                                            </div>
                                            </TabPanel>
                                            {/* Single Tab Content End */}
                                            {/* Single Tab Content Start */}
                                            <TabPanel>
                                            <div className="tab-pane fade show active" id="account-info" >
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>
                                                    <div className="account-details-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="first-name" className="required">
                                                                            First Name
                                                                        </label>
                                                                        <input type="text" id="first-name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="last-name" className="required">
                                                                            Last Name
                                                                        </label>
                                                                        <input type="text" id="last-name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-input-item">
                                                                <label htmlFor="display-name" className="required">
                                                                    Display Name
                                                                </label>
                                                                <input type="text" id="display-name" />
                                                            </div>
                                                            <div className="single-input-item">
                                                                <label htmlFor="email" className="required">
                                                                    Email Addres
                                                                </label>
                                                                <input type="email" id="email" />
                                                            </div>
                                                            <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="current-pwd" className="required">
                                                                        Current Password
                                                                    </label>
                                                                    <input type="password" id="current-pwd" />
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="new-pwd" className="required">
                                                                                New Password
                                                                            </label>
                                                                            <input type="password" id="new-pwd" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label
                                                                                htmlFor="confirm-pwd"
                                                                                className="required"
                                                                            >
                                                                                Confirm Password
                                                                            </label>
                                                                            <input type="password" id="confirm-pwd" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                            <div className="single-input-item btn-hover">
                                                                <button className="check-btn sqr-btn">
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            </TabPanel>
                                            {/* Single Tab Content End */}
                                        </div>
                                    </div>
                                    {/* My Account Tab Content End */}
                                </Tabs>
                            </div>
                        </div>
                        {/* My Account Page End */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyAccountTab