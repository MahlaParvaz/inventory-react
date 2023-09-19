import { useState } from 'react';

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);
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
            <label for="category-title" className="text-slate-400 block mb-1">
              Category Title
            </label>
            <input
              type="text"
              name="category-title"
              id="category-title"
              className="bg-transparent border rounded-xl border-slate-500 text-slate-400 w-full md:w-auto"
              placeholder="title..."
            />
          </div>
          <div>
            <label
              for="category-description"
              className="text-slate-400 block mb-1"
            >
              Category description
            </label>
            <textarea
              type="text"
              name="category-description "
              id="category-description"
              className="bg-transparent border rounded-xl border-slate-400 text-slate-600 w-full"
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
