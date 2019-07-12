# Studium

# Postman Link for test cases 
[Using this link anybody can directly add all test case in their own postman.](https://www.getpostman.com/collections/6543b0d2f814aa61914f)
https://www.getpostman.com/collections/6543b0d2f814aa61914f  
Go to Postman > Import from Link , paste this link.  

### URL ID Examples
5d28d618e1d652541c044f27
5d28d69e91f8a654d5ebace3

### Group ID Examples
5d28cb524da6e74ab41c8d41

# Mutation 

mutation{  
  createUrl(urlInput:{name:"url8",url:"http://trsurl.com/",parent:"5d28cb524da6e74ab41c8d41"}){  
    id  
    name  
    url  
    visitCounter  
    parent{  
      id  
      name  
      url  
      visitCounter  
    }  
  }  
}  

mutation { createUrl ( urlInput : { name : \"url8\" , url : \"http://trsurl.com/\" , parent : \"5d28cb524da6e74ab41c8d41\" } ) { id name url visitCounter parent { id name url visitCounter } } } 

mutation{
  createGroup(groupInput:{name:"group2",url:"http://group2.com"}){
    id
    childUrls{
      url
    }
    url
    visitCounter    
    name
  }
}
mutation { createGroup ( groupInput : { name : \"group2\" , url : \"http://group2.com\" } ) { id url visitCounter name childUrls { url } } }

mutation{
  incGroupCounter(incGroupInput:{id:"5d28cb524da6e74ab41c8d41"}){
    id
    childUrls{
      url
    }
    url
	visitCounter    
    name
  }
}
mutation { incGroupCounter ( incGroupInput : { id : \"5d28cb524da6e74ab41c8d41\" } ) { id childUrls { url } url visitCounter name } } 

mutation{
  addUrlInGroup(addUrlInGroupInput:{groupId:"5d28cb524da6e74ab41c8d41",urlId:"5d28d618e1d652541c044f27"}){
    id
    name
    url
    visitCounter
    childUrls {
      id
      name
      url
    }
  }
}
mutation { addUrlInGroup ( addUrlInGroupInput : { groupId : \"5d28cb524da6e74ab41c8d41\" , urlId : \"5d28d618e1d652541c044f27\" } ) { id name url visitCounter childUrls { id name url } } } 

# Query 

{ groups { id name url visitCounter childUrls { id name url } } } 

{ group ( id : \"5d28cb524da6e74ab41c8d41\" ) { id name url visitCounter childUrls { id name url } } } 

{ urls { id name url visitCounter parent { id name url visitCounter } } } 

{ url ( id : \"5d28d618e1d652541c044f27\" ) { id name url visitCounter parent { id name url visitCounter } } }

{ limitedUrls { id name url visitCounter parent { id name url visitCounter } } } 

{ randomUrl ( groupId : \"5d28cb524da6e74ab41c8d41\" ) { id name url visitCounter parent { id name url visitCounter } } } 