function menuBtn()
{
    var x = document.getElementById("menuBtn").getAttribute("aria-expanded");
    if(x == "true")
    {
        x = "false"
    }
    else
    {
        x = "true";
    }
    document.getElementById("menuBtn").setAttribute("aria-expanded",x);
    document.getElementById("user-nav").setAttribute("aria-expanded",x);
}

function create_node()
{
    window.open("createnode.html","_self")
}
