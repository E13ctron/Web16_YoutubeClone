import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import PlaylistCard from "./PlaylistCard";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Close } from "@material-ui/icons";
import { Button } from "react-bootstrap";

import "./Playlists.css";
function Playlists() {
  const {
    currentUser,
    setQueue,
    setPlaylistPlaying,
    setDeletePlaylistOpen,
    deletePlaylistOpen,
    setConfirmedPlaylistDelete,
  } = useAuth();
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    setQueue([]);
    setPlaylistPlaying(false);
  }, [setQueue, setPlaylistPlaying]);
  useEffect(() => {
    database.users
      .doc(currentUser.uid)
      .collection("playlists")
      .onSnapshot((snaps) => {
        setPlaylists(snaps.docs.map((doc) => doc.data()));
      });
  }, [currentUser, setPlaylists]);
  function confirmedDelete() {
    setConfirmedPlaylistDelete(true);
    setDeletePlaylistOpen(false);
  }
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
        <Dialog open={deletePlaylistOpen} keepMounted>
          <div className="header">
            <DialogTitle>Delete Playlist</DialogTitle>
            <Close
              className="close_icon"
              onClick={() => setDeletePlaylistOpen(false)}
            />
          </div>
          <DialogContent>
            <h4>Are you Sure you want to delete Playlist?</h4>
            <div className="delete-choices">
              <Button onClick={confirmedDelete} variant="danger">
                Delete
              </Button>
              <Button
                onClick={() => setDeletePlaylistOpen(false)}
                variant="outline-secondary"
              >
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="playlists">
          <div className="pl-heading">
            <div className="recommended-heading">Playlists</div>
          </div>
          <div className="pl-cards">
          {playlists.length > 0 ? (
            playlists.map((item) => <PlaylistCard name={item.name} />)
          ) : (
            <h2>No Playlists</h2>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Playlists;
