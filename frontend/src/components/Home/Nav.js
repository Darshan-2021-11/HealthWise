import React from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Nav.css";
import Nav2 from "./Nav2";

function nav({ user }) {
  const userVerified = localStorage.getItem("userVerified");
  return user ? (
    <>
      <div className="navigation-bar-div">
        <div className="logo-and-name">
          {/* div for logo and name */}
          HealthWise
          <span
            style={{
              color: "green",
            }}
          >
          </span>
        </div>
        <ul className="navigation-bar-ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user.name ? (
            user.role === "user" ? (
              <li>
                <Link
                  to={
                    userVerified === "true"
                      ? `/dashboard/user/updateUser/${user._id}`
                      : `/dashboard/user/verifyyourself/${user._id}`
                  }
                >
                  {user.name}
                </Link>
              </li>
            ) : (
              <li>
                <Link to={`/dashboard/admin/userdetails/${user._id}`}>
                  {user.name}
                </Link>
              </li>
            )
          ) : (
            <li>
              <Link to={"/signup"}>Sign up</Link>
            </li>
          )}

          <li>
          </li>
          <li>
            <Link to={"/chatroom"}>Chat</Link>
          </li>
          <li>
            {user.role == "user" ? (
              <Link to={`/user/home/doctorseye/${user._id}`}>MyLogs</Link>
            ) : (
              <Link to={`/user/home/doctorseye/doc/6490aba82986ba9ccbf04741`}>
                Doctor's Eye
              </Link>
            )}
          </li>

          <li>
            <Link to={"/ai/chat"}>Doctor GPT</Link>
          </li>
        </ul>
      </div>
      <Nav2 user={user} />
      <hr />
    </>
  ) : (
    <div />
  );
}

export default nav;
