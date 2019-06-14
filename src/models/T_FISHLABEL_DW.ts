import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FISHLABEL_DW', {schema: 'dbo' } )
export class T_FISHLABEL_DW {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FLD_VERSION_N',
        })
    public FLD_VERSION_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'FLD_LAYOUT_C',
        })
    public FLD_LAYOUT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLD_FORMAT_C',
        })
    public FLD_FORMAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLD_DWPRINT_C',
        })
    public FLD_DWPRINT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLD_PAPERID_C',
        })
    public FLD_PAPERID_C: string | null;

}
