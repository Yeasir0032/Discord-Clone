import ActionTooltip from "../action-tooltip"

export const ServerExplorerAction = () => {
    return <div>
    <ActionTooltip label="Browse Servers" side="right" align="center">
      <button className="group flex items-center">
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
          <svg
            className="group-hover:text-white transiton text-emerald-500 "
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              className=""
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z"
              clipRule="evenodd"
              className=""
            ></path>
          </svg>
        </div>
      </button>
    </ActionTooltip>
  </div>
}

export default ServerExplorerAction