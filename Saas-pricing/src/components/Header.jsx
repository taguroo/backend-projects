/* 

define functional component Header
return header section containing:
    title element displaying "Flexible Plans for Everyone"
    subtitle element displaying "Choose the best plan for your project"

*/

function Header({
    title = "Flexible Plans for Everyone",
    subtitle = "Choose the best plan for your project"
}) {
    return (
         <header className="Header">
            <h1>Flexible Plans for Everyone</h1>
            <p>Choose the best plan for your project</p>
        </header>
    );
}

export default Header