import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { FriendshipService } from '../services/friendship.service';
import { Friendship } from './models/friendship.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  email=""; // mail addres for sending request
  friends : Friendship[]; // list of friendships
  friendrequests : Friendship[]; // list of frendrequests
  submitted : boolean = false; // true when sending request
  memberId=parseInt(localStorage.getItem("MemberId")); // current user
  friendship : Friendship = new Friendship(0, this.memberId, 0, 1); // new frendship


  constructor(private _MembersService:MembersService, private _FriendshipService:FriendshipService) { }

  // get current friends
  getFriends(){
    this._FriendshipService.getFriendships(this.memberId).subscribe(result => {
      this.friends = result;
    })
  }
  
  // get current frienships
  getFriendRequests()
  {
    this._FriendshipService.getFriendshipRequests(this.memberId).subscribe(result => {
      this.friendrequests=result;
    })
  }

  // click event for deleting friendship
  delFrendship(friendship : Friendship) {  
    //put request
    this._FriendshipService.delFriendship(friendship).subscribe(result => {
      this.getFriendRequests();
      this.getFriends();
    });
  }

  // click event for changing friendship
  changeFrendship(friendship : Friendship, status : number) {
    friendship.status = status;
  
    //put request
    this._FriendshipService.editFriendship(friendship).subscribe(result => {
      this.getFriendRequests();
      this.getFriends();
    });
  }

  // on startip
  ngOnInit() {
    this.getFriends(); //<-- load friendships
    this.getFriendRequests(); //<-- load friendshipsrequests
  }

  // send friendrequest
  onSubmit(){
    this._MembersService.getUserByEmail(this.email).subscribe( //<-- get id of member with email
      result => {
        if(result.memberID > 0) { //<-- check if is empty obj
          this.friendship.receverId = result.memberID;
          this._FriendshipService.addFriendship(this.friendship).subscribe( //<-- send request
            result => {
              alert("Vriend toegevoegd");
              this.getFriendRequests(); //<-- reload
              this.getFriends(); //<-- reload
            }
          );
        } else {
          alert("Niet gevonden");
        }
      }
    );
  }

}
