import React, { useState, useEffect, useContext } from "react";
import { Avatar, Grid } from "@mui/material";
import "./MemberBar.css";
import dummymembers, { dummtmembers } from "./dummymembers.jsx";
import callAPI from "../utils/callAPI";
import { WebSocketContext } from "../utils/contexts/WebSocketContext";

function MemberBar() {
  // console.log("bdhjasbjdha", roomID)

  // console.log("userSelfMessage ", userSelfMessage)

  // const [members, setMembers] = useState(null);
  // const [membersInfo, setMembersInfo] = useState(null);

    // const message = async () => {
    //   let response_obj = await callAPI({
    //       endpoint: `/room/memberInfo/${roomID}`,
    //   });

    //   if (response_obj.data.msg == "success") {
    //     setMembers(response_obj.data.room_info)
    //     setMembersInfo(response_obj.data.users_info)
    //     console.log(response_obj.data.room_info)
    //     console.log(response_obj.data.users_info)
    //   }
    // };

    // useEffect(() => {
    //     message();
    // }, []);

  const {userSelfMessage} = useContext(WebSocketContext);

  // if (userSelfMessage.length != 0) {

  return (
    <Grid item className="memberbar_root">
      { userSelfMessage.length != 0 ?
      <Grid container direction="column">
          {userSelfMessage.data.players.map((val, key) => {

          return (
            <Grid
              item
              className={true ? "my_info" : "member_info"}
              key={key}
            >
              {/* <Grid
                container
                direction="row"
                // alignItems={"center"}
                justifyContent="center"
              >
                <Grid item className="rank_number">
                  #1
                </Grid>
                <Grid item>
                  <Avatar
                    src={require(`./../assets/${val.image}.svg`)}
                    sx={{ width: 35, height: 35 }}
                  />
                </Grid>
                <Grid item>
                  <Grid container direction="column" justifyContent={"center"}>
                    <Grid item className="member_name">
                      {val.name}
                    </Grid>
                    <Grid item className="member_pts">
                      Points:200
                    </Grid>
                  </Grid> */}
              <Grid container direction="row" justifyContent="center">
                {/* {membersInfo.map((val2, key) => {
                  return val2.username===val ? */}
                  <Grid item className="rank_number">
                    #1
                  </Grid>
                  <Grid item>
                    <Avatar
                      src={require(`./../assets/${userSelfMessage.data.avatars[key]}.svg`)}
                      sx={{ width: 35, height: 35 }}
                    />
                  </Grid>
                  {/* : null
                })} */}

                <Grid item>
                  <Grid container direction="column" justifyContent={"center"}>
                    <Grid item className="member_name">
                      {val}
                    </Grid>
                    <Grid item className="member_pts">
                      Score:{userSelfMessage.data.score[key]}
                    </Grid>
                  </Grid>
                </Grid>
                
                {/* <Grid item className="member_name">
                  {val}
                </Grid> 
                <Grid item className="member_name">
                  Score: {userSelfMessage.data.score[key]}
              </Grid> */}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      : <></>}
    </Grid>
  );
// }
}

export default MemberBar;
