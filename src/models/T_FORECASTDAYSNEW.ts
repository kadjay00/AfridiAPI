import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTDAYSNEW', {schema: 'dbo' } )
export class T_FORECASTDAYSNEW {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FDA_DATE_DAT',
        })
    public FDA_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FDA_SUBDEPARTMENT_N',
        })
    public FDA_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FDA_PROSPECTS_D',
        })
    public FDA_PROSPECTS_D: number;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'FDA_CHANGEUSER_C',
        })
    public FDA_CHANGEUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FDA_CHANGEDATE_DAT',
        })
    public FDA_CHANGEDATE_DAT: Date | null;

}
