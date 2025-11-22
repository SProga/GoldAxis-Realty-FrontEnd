import Button from "../../UI/button/button";
import Container from "../../UI/container/container";

export default function PropertySearchPanel() {
  return (
    <Container>
      <form className="p-8 bg-white shadow-default rounded-2xl" action="#">
        <div className="text-xl font-light mb-4">
          Find the
          <span className="font-bold text-primary"> best </span>
          place
        </div>
        <div className="flex">
          <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Number of rooms
              </label>
              <input
                type="number"
                name="rooms"
                id="rooms"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="0"
                required
              />
            </div>
          </div>
          <Button />
        </div>
        <div className="flex items-center mt-8">
          <div className="mr-3">Filters: </div>
          <div className="flex flex-wrap items-center gap-x-2">
            <button
              type="button"
              className="rounded-3xl bg-primary text-secondary px-3 py-1 text-sm cursor-pointer hover:bg-primary/80"
            >
              City
            </button>
            <button
              type="button"
              className="rounded-3xl border border-secondary text-secondary px-3 py-1 text-sm cursor-pointer hover:bg-primary/20"
            >
              Country
            </button>
            <button
              type="button"
              className="rounded-3xl border border-secondary text-secondary px-3 py-1 text-sm cursor-pointer hover:bg-primary/20"
            >
              Townhouse
            </button>
            <button
              type="button"
              className="rounded-3xl border border-secondary text-secondary px-3 py-1 text-sm cursor-pointer hover:bg-primary/20"
            >
              By the beach
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}
