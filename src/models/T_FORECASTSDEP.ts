import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTSDEP', {schema: 'dbo' } )
export class T_FORECASTSDEP {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FSD_DATE_DAT',
        })
    public FSD_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'FSD_TYPE_C',
        })
    public FSD_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FSD_SUBDEPARTMENT_N',
        })
    public FSD_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 11,
        scale: 2,
        name: 'FSD_PV_D',
        })
    public FSD_PV_D: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FSD_PRICECURRENCY_C',
        })
    public FSD_PRICECURRENCY_C: string | null;

}
