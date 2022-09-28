function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);


    useEffect(() => {
      fetch("http://localhost:4000/items")
        .then((r) => r.json())
        .then((items) => setItems(items));
    }, []);
  
    // add this callback function
    function handleDeleteItem(deletedItem) {
      // console.log("In ShoppingCart:", deletedItem);
    }
  
    // ...rest of component
  
    return (
      <div className="ShoppingList">
        <ItemForm onAddItem={handleAddItem} />
        <Filter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ul className="Items">
          {/* pass it as a prop to Item */}
          {itemsToDisplay.map((item) => (
            <Item
              key={item.id}
              item={item}
              onUpdateItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }
export default ShoppingList