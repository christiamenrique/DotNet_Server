# C# Admin server with .NET Core

This application has a .NET C# REST API backend that fetches data from a MySQL DB that interacts with a React Application that allows you create new entries, read, delete, and update to the MySQL DB.


## Demo
Below is a demo of the page utilizing CRUD methods.


### Read
![](work/demo/read.gif)


### Create
![](work/demo/create.gif)


### Update
![](work/demo/update.gif)


### DELETE
![](work/demo/delete.gif))


## Images

## Read
This demonstrates that my front end react application was able to fetch data from my .NET backend
![Read screenshot](work/images/read.png)

## Create
I first created a new product
![Create screenshot](work/images/create.png)

The product that I created was added to the list of all products
![Create screenshot](work/images/create2.png)


## Update
Updating previews product Using Post Method with Using Put
![Update screenshot](work/images/put.png)

## Delete
After updating but before deleting the product
![Updatescreenshot](work/images/put2.png)
Deleting the item made with the id 18 by pressing de delete button. After deleting the item have been remove.
![Delete Screenshot](work/images/delete.png)


## Intalling 
* Clone this repo and 
* Then in the C# files change the connection string in the startup file to the  database that it will be connect.
* Then run the application using : 
```
dotnet run
```
* The backend and the frontend will establish a connection with each other.
* If running into any problems go to the build with resources showing below

### Built With 

* [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces
* [C#](https://docs.microsoft.com/en-us/dotnet/csharp/) - An elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework.
* [MySQL](https://dev.mysql.com/doc/) - Relational database management system



## Author
* [Christiam Hernandez](https://github.com/christiamenrique)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



 
