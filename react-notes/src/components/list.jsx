function List() {

    const fruits = [{name: 'Apple', color: 'Red'},
        {name: 'Banana', color: 'Yellow'},
        {name: 'Coconut', color: 'Brown'},
        {name: 'Pineapple', color: 'Yellow'}
        
    ];
    // Sort the fruits array by name
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = fruits.map((fruit) =>
        <li key={fruit.name}>{fruit.name} - Color : {fruit.color}</li>
    );

    return <ul>{listItems}</ul>;
}
export default List;