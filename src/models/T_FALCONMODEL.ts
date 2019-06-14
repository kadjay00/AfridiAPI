import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FALCONMODEL', {schema: 'dbo' } )
export class T_FALCONMODEL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'FMO_MODEL_C',
        })
    public FMO_MODEL_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FMO_DESCRIPTIONNL_C',
        })
    public FMO_DESCRIPTIONNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FMO_DESCRIPTIONFR_C',
        })
    public FMO_DESCRIPTIONFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'FMO_UPDATECOMMAND_C',
        })
    public FMO_UPDATECOMMAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FMO_FWID_C',
        })
    public FMO_FWID_C: string | null;

}
