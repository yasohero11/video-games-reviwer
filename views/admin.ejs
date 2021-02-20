<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <%- include("parts/adminStyle") %>
  <style>
    .game-tags {
      background: #3e64ff;
      padding: 2px 5px;
      border-radius: 20px;
      color: aliceblue;
      white-space: nowrap;
    }
  
    .platform-view {
      background: rgb(46, 46, 46);
      width: 40px;
      height: 40px;
      margin: 2px;
      text-align: center;
      font-size: 25px;

    }
  </style>
</head>
<body>
  
  <%- include("parts/sidebarAdminNav") %>
  <div class="container-fluid p-0">
    <h2 class="mb-4">Games-Dashboard</h2>
  </div>
  
  
  <div class="container-fluid">
    <form action="/games">
      <span> <i style="font-size: 20px;" class="fas fa-search"></i> <input type="text" class="search w-75"
          placeholder="Search For Ganmes"></span>
    </form>
  </div>
  <% for( game of games){ %>
  
  <div class="container mt-3" style="background-color: #181818;" id="D<%=game._id%>">
    <div class="row justify-content-md-start justify-content-sm-center justify-content-start ">
      <div class="col-xl-4 col-lg-5 col-md-5 col-sm-4 col-8 pt-3">
        <img class="img-fluid" src="<%= game.image_path %>" alt="">
      </div>
      <div class="col-xl-8 col-lg-6 col-md-7 col-sm-8 col-11 pt-xl-5 pt-md-3 pt-sm-2">
        <div class="container-fluid">
          <div class="row justify-content-md-center justify-content-sm-center pl-sm-4">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-sm-0 p-2 pl-2">
              <strong style="display: block;"><%= game.name %></strong>
              <p class="m-0"> Rateing: <%= game.rateing %>/10</p>
              <p class="m-0"> Price: <%= game.price %>$</p>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 p-sm-0 p-2 pl-2">
              <strong style="display: block;">Tags</strong>
              <% for(tag of game.tags){ %>
              <i class="game-tags"><%=tag.name%></i>
              <%}%>
              </div>
            </div>
    
          </div>
          <div class="row  pt-md-2 pt-sm-2 pl-sm-4 ">
            <div class="col-xl-7 col-lg-6 col-md-6  pl-sm-3 pl-4" >
              <strong>Platforms</strong>
              <div class="row pr-sm-3  pl-4">
                <% for(platofrm of game.platforms){ %>
              <span class="platform-view"><%- platofrm.icon %></span>
              <%}%>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 pt-lg-4 pt-1 pt-md-5 pr-md-3 pl-0 " > <a class="btn btn-outline-warning float-right " style="border-radius: 30px; padding: 2px 7px;" href="games/<%=game._id%>">
              view Game <i class="fas fa-long-arrow-alt-right"></i></a></div>
          </div>
        </div>
      </div>
      <div class="row  text-right">
  
        <div class="col-12 p-2">
          <a class="btn btn-info btn-circle edit" href="admin/games/<%=game._id%>" style="color: white;"><i
              class="fas fa-pen"></i></a>
          <a class="btn btn-danger btn-circle remove" ref-id="<%=game._id %>" style="color: white;"><i class="far fa-trash-alt"></i></a>
        </div>
      </div>
    </div>
  
    <%}%>

</body>
</html>







<%- include("parts/sidebardBottom") %>

<%- include('parts/alert')%>

  <script>

    var target
    document.addEventListener("click", (event) => {
      target = event.target
      if (target.tagName == "I")
        target = target.parentElement

      if (target.classList.contains("remove")) {
        if (confirm("Are you sure that you want to delete this game from the database?"))
                (async function (){                                                    
                  let res = await fetch(`games/${target.getAttribute("ref-id")}`,
                    {
                      method:"delete"
                    }
                  )                             
                  try {
                    res = await res.json()
                     if(res.success){
                       showAlert(res.data, "alert-success")
                       document.querySelector(`#D${target.getAttribute("ref-id")}`).remove()
                     }else{
                      showAlert(res.msg, "alert-danger")
                     }
                  } catch (err) {
                    console.log(err)
                  }                
                })()
      }
    })

    
  </script>