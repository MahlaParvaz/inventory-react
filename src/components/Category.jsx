import { useState } from 'react';

const CategoryForm = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoaryFormData] = useState({
    title: '',
    description: '',
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    // console.log(categoryFormData);
    setCategoaryFormData({ ...categoryFormData, [name]: value });
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategories = {
      ...categoryFormData,
      createAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setCategories((prevState) => [...prevState, newCategories]);
    setCategoaryFormData({ title: '', description: '' });
  };
  return (
    <section>
      <div
        className={`mb-8  ${isShow ? '' : ' hidden '} `}
        id="category-wrapper"
      >
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 shadow-2xl">
          <div>
            <label
              htmlFor="category-title"
              className="text-slate-400 block mb-1"
            >
              Category Title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent border rounded-xl border-slate-500 text-slate-400 w-full md:w-auto"
              placeholder="title..."
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="text-slate-400 block mb-1"
            >
              Category description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type=" text"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div className="flex flex-row justify-between gap-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
              type="submit"
              className="flex-1 py-2 border border-slate-400 rounded-xl text-slate-400"
            >
              Cancle
            </button>
            <button
              onClick={addNewCategoryHandler}
              type="submit"
              id="add-new-category"
              className="flex-1 py-2 border-none rounded-xl text-white bg-slate-500"
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsShow((prevstate) => !prevstate)}
        type="submit"
        id="toggle-add-category"
        className={`text-slate-500 text-lg mb-4 font-medium ${
          isShow && 'hidden'
        }`}
      >
        Add New Category ?
      </button>
    </section>
  );
};

export default CategoryForm;
