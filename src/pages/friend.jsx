import { useState } from "react";
import { protectedApiPost } from "../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";

const Friend = () => {
  const [addFriend, setAddFriend] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const searchHandler = async () => {
    try {
      const object = {
        user: addFriend,
      };
      const response = await protectedApiPost("userdata/friend", object);
      setSearchResult(response.data);
      setErrorMessage("");
    } catch (error) {
      setSearchResult(null);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
        toast.error(
          <ToastError data={error.response.data.message} />,
          ErrorStyling
        );
      } else {
        setErrorMessage("An unexpected error occurred.");
        toast.error(
          <ToastError data={"An unexpected error occurred"} />,
          ErrorStyling
        );
      }
    }
  };
  const addFriendHandler = async (action) => {
    try {
      const object = {
        friendId: searchResult.user.userId,
        action: action,
      };
      const response = await protectedApiPost("userdata/add-friend", object);
      toast.success(
        <ToastSuccess data={response.data.message} />,
        SuccessStyling
      );
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(
          <ToastError data={error.response.data.message} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An unexpected error occurred"} />,
          ErrorStyling
        );
      }
    }
  };
  return (
    <div>
      <input
        style={{ border: "2px solid black" }}
        onChange={(event) => setAddFriend(event.target.value)}
      />
      <button onClick={searchHandler}>Search</button>
      {searchResult && (
        <div>
          <h2>User Information</h2>
          <p>
            Name: {searchResult.user.firstName} {searchResult.user.lastName}
          </p>
          <p>Email: {searchResult.user.email}</p>
          <p>Relationship Status: {searchResult.relationshipStatus}</p>
          <button onClick={() => addFriendHandler("add-friend")}>
            Add Friend
          </button>
          <button onClick={() => addFriendHandler("accept-request")}>
            Accept Request
          </button>
        </div>
      )}
      {errorMessage && (
        <div style={{ color: "red" }}>
          <p>no user found</p>
        </div>
      )}
    </div>
  );
};

export default Friend;
