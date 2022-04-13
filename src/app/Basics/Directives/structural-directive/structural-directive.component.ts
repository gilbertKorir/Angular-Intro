import { Component, OnInit } from '@angular/core';

let gituser = [
  {
    login: 'mojombo',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mojombo',
    html_url: 'https://github.com/mojombo',
    followers_url: 'https://api.github.com/users/mojombo/followers',
    following_url:
      'https://api.github.com/users/mojombo/following{/other_user}',
    gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
    organizations_url: 'https://api.github.com/users/mojombo/orgs',
    repos_url: 'https://api.github.com/users/mojombo/repos',
    events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
    received_events_url: 'https://api.github.com/users/mojombo/received_events',
    type: 'User',
    site_admin: false,
  },
  {
    login: 'evanphx',
    id: 7,
    node_id: 'MDQ6VXNlcjc=',
    avatar_url: 'https://avatars.githubusercontent.com/u/7?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/evanphx',
    html_url: 'https://github.com/evanphx',
    followers_url: 'https://api.github.com/users/evanphx/followers',
    following_url:
      'https://api.github.com/users/evanphx/following{/other_user}',
    gists_url: 'https://api.github.com/users/evanphx/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/evanphx/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/evanphx/subscriptions',
    organizations_url: 'https://api.github.com/users/evanphx/orgs',
    repos_url: 'https://api.github.com/users/evanphx/repos',
    events_url: 'https://api.github.com/users/evanphx/events{/privacy}',
    received_events_url: 'https://api.github.com/users/evanphx/received_events',
    type: 'User',
    site_admin: false,
  },
  {
    login: 'bmizerany',
    id: 46,
    node_id: 'MDQ6VXNlcjQ2',
    avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bmizerany',
    html_url: 'https://github.com/bmizerany',
    followers_url: 'https://api.github.com/users/bmizerany/followers',
    following_url:
      'https://api.github.com/users/bmizerany/following{/other_user}',
    gists_url: 'https://api.github.com/users/bmizerany/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/bmizerany/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bmizerany/subscriptions',
    organizations_url: 'https://api.github.com/users/bmizerany/orgs',
    repos_url: 'https://api.github.com/users/bmizerany/repos',
    events_url: 'https://api.github.com/users/bmizerany/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/bmizerany/received_events',
    type: 'User',
    site_admin: false,
  },];

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})

export class StructuralDirectiveComponent implements OnInit {
showElement = !'Hello world'
gituser = gituser;
show:boolean = true;
  constructor() { }
  toggleElement(v: any){
    console.log(v);
    this.showElement = !this.showElement;
    // this.someElement
    
  }
  showme:boolean = true;
  showagain:boolean = false;
  showmethen:boolean = true;

  ngOnInit(): void {
  }

}
