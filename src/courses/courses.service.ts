import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos de Nest',
      description: 'Learn Nest',
      tags: ['NodeJs', 'TypeScript'],
    },
    {
      id: 2,
      name: 'Fundamentos de React',
      description: 'Learn React',
      tags: ['NodeJs', 'TypeScript'],
    },
    {
      id: 3,
      name: 'Fundamentos de TypeOrm',
      description: 'Learn TypeOrm',
      tags: ['NodeJs', 'TypeScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const foundCourse = this.courses.find((course) => course.id === Number(id));
    if (!foundCourse) {
      throw new HttpException(`Couse ID ${id} no found`, HttpStatus.NOT_FOUND);
    }
    return foundCourse;
  }

  create(createCourseDTO: any) {
    return this.courses.push(createCourseDTO);
  }

  update(id: string, createCourseDTO: any) {
    const courseIndex = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    this.courses[courseIndex] = createCourseDTO;
  }

  delete(id: string) {
    const courseIndex = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
