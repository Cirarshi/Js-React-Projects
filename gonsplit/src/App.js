import { useState } from "react";
import { Button } from "./Button";
import { FriendList } from "./FriendList";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBilll } from "./FormSplitBilll";

const initialFriends = [
  {
    id: 118836,
    name: "Shubham Mom",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Pritam Y",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 21284,
  },
  {
    id: 499476,
    name: "Praful",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 5578,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend((curr) => null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <h1>Go-N-Split</h1>

        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelectedFriend}
        ></FriendList>

        {showAddFriend && (
          <FormAddFriend onAddFriend={handleAddFriend}></FormAddFriend>
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBilll
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        ></FormSplitBilll>
      )}
    </div>
  );
}

export default App;
