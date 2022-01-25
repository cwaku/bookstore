export default function Books() {
  return (
    <main>
      <div className="books-container">
        <p>No books added</p>
        <button type="button">Remove</button>
        <form className="add-form">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Author" />
          <button type="button">Add Book</button>
        </form>
      </div>
    </main>
  );
}
