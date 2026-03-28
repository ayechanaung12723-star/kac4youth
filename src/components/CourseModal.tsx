"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CourseModal({ course, isOpen, onClose }: any) {
  if (!course) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#0f172a] p-6 md:p-8 text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h3" className="text-2xl md:text-3xl font-bold">
                    {course.title}
                  </Dialog.Title>
                  <button onClick={onClose} className="text-slate-400 hover:text-white text-xl font-bold">
                    ×
                  </button>
                </div>

                {/* Topics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                    {course.topics.map((topic: string, i: number) => (
                      <li key={i} className="text-sm md:text-base text-slate-300 list-disc ml-5">
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="hidden md:flex items-center justify-center">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-28 h-28 md:w-36 md:h-36 object-contain"
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}