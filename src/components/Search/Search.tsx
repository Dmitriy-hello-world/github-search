import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { Button } from 'components/Button';

interface SearchProps { 
  isError: boolean;
  onSubmit: (text: string) => void;
}

interface FormFields {
  userName: HTMLInputElement;
}

export const Search = ({ isError, onSubmit }: SearchProps) => {
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();

    const text = event.currentTarget.userName.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset()
    }

  }

  return (
    <form onSubmit={onHandleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          id="search"
          name="userName"
          className={styles.textField}
          placeholder="Search GitHub username.."
        />
        {isError && (
          <div className={styles.error}>
            No Result
          </div>
        )}
        <Button>
          Search
        </Button>
      </div>
    </form>
  )
};
;
