import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friendship } from '../friends/models/friendship.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  constructor(private http: HttpClient) {}

  /* add friendship api call*/
  addFriendship(friendship: Friendship) {
    return this.http.post<Friendship>("https://localhost:44364/api/Friendships", friendship);
  }

  /*get frienshiprequest api call */
  getFriendshipRequests(id: number): Observable<Friendship[]> {
    return this.http.get<Friendship[]>("https://localhost:44364/api/Friendships/getFriendshipsrequests/" + id);
  }

  /*get friendships api call */
  getFriendships(id : number): Observable<Friendship[]> {
    return this.http.get<Friendship[]>("https://localhost:44364/api/Friendships/getFriendships/" + id );
  }

  /*edit friendship api cal*/
  editFriendship(friendship: Friendship) {
    return this.http.put<Friendship>("https://localhost:44364/api/Friendships/"+friendship.friendshipId, friendship);
  }

  /*del friendship api cal*/
  delFriendship(friendship: Friendship) {
    return this.http.delete<Friendship>("https://localhost:44364/api/Friendships/"+friendship.friendshipId);
  }
}
