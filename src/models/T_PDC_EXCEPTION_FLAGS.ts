import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_EXCEPTION_FLAGS', {schema: 'dbo' } )
export class T_PDC_EXCEPTION_FLAGS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PEF_CODE_C',
        })
    public PEF_CODE_C: string;

    @Column('char', {
        nullable: true,
        name: 'PEF_USED_C',
        })
    public PEF_USED_C: string | null;

}
