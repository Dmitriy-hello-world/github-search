import { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { Button } from 'components/Button';

interface SearchProps { 
  isError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ isError, onSubmit }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onHandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const currentInputRef = inputRef.current;
    if (currentInputRef) {
      onSubmit(currentInputRef.value);
      currentInputRef.value = '';
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
          ref={inputRef}
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
